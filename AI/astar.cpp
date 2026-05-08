#include <iostream>
#include <algorithm>
#include <unordered_map>
#include <queue>
#include <tuple>
#include <cmath>
using namespace std;

// ─────────────────────────────────────────
// Heuristic: Manhattan Distance
// For each tile, count how many rows + cols
// away it is from its goal position.
// Admissible (never overestimates)
// → A* guaranteed to find optimal path
// ─────────────────────────────────────────
int manhattan(const string& s, const string& goal) {
    int h = 0;
    for (int i = 0; i < 9; i++) {
        if (s[i] == '0') continue;          // skip blank tile
        int j = goal.find(s[i]);            // where should this tile be?
        h += abs(i/3 - j/3) + abs(i%3 - j%3);
    }
    return h;
}

// ─────────────────────────────────────────
// A* Search
// f = g + h
// g = moves made so far (exact)
// h = manhattan distance (estimated)
// ─────────────────────────────────────────
void astar(const string& start, const string& goal) {
    // {f, g, state}
    priority_queue<tuple<int,int,string>,
                   vector<tuple<int,int,string>>,
                   greater<>> open;

    unordered_map<string, int>    gCost;
    unordered_map<string, string> parent;

    gCost[start] = 0;
    parent[start] = "";
    open.push({manhattan(start, goal), 0, start});

    // Blank tile moves: up, down, left, right
    int moves[] = {-3, 3, -1, 1};

    while (!open.empty()) {
        // auto [f, g, cur] = open.top(); open.pop();
        // Replace with these:
        int f      = get<0>(open.top());
        int g      = get<1>(open.top());
        string cur = get<2>(open.top());
        open.pop();

        if (cur == goal) {
            // Reconstruct and print path
            vector<string> path;
            for (string n = goal; n != ""; n = parent[n])
                path.push_back(n);
            reverse(path.begin(), path.end());

            int step = 0;
            for (auto& p : path) {
                cout << "Step " << step++ << ":\n";
                for (int i = 0; i < 9; i++)
                    cout << p[i] << " \n"[i%3 == 2];
                cout << "\n";
            }
            cout << "Total moves: " << g << "\n";
            return;
        }

        int blank = cur.find('0');

        for (int mv : moves) {
            int nb = blank + mv;
            if (nb < 0 || nb > 8) continue;
            if (mv == -1 && blank%3 == 0) continue;  // left boundary
            if (mv ==  1 && blank%3 == 2) continue;  // right boundary

            string next = cur;
            swap(next[blank], next[nb]);

            int new_g = g + 1;
            if (!gCost.count(next) || new_g < gCost[next]) {
                gCost[next]  = new_g;
                parent[next] = cur;
                open.push({new_g + manhattan(next, goal), new_g, next});
            }
        }
    }
    cout << "No solution exists\n";
}

int main() {
    string start, goal;
    cout << "Start state (e.g. 283164705): "; 
    cin >> start;
    cout << "Goal state  (e.g. 123456780): "; 
    cin >> goal;
    astar(start, goal);
    return 0;
}