#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <queue>
using namespace std;

// Create an alias for readability
using Graph = unordered_map<string, vector<string>>;

// ─────────────────────────────────────────
// DFS — Recursive (Easiest to memorize!)
// Mark -> Print -> Recurse into unvisited
// ─────────────────────────────────────────
void dfs(const string& person, const Graph& g, unordered_set<string>& visited) {
    visited.insert(person);                        // 1. MARK
    cout << "DFS: " << person << "\n";             // 2. PRINT

    // 3. Loop through neighbors
    for (const string& connection : g.at(person)) {
        if (!visited.count(connection)) {          // 4. NOT visited?
            dfs(connection, g, visited);           // 5. RECURSE (go deeper)
        }
    }
}

// ─────────────────────────────────────────
// BFS — Iterative with Queue
// Queue -> Pop front -> Add unvisited to back
// ─────────────────────────────────────────
void bfs(const string& start_person, const Graph& g) {
    unordered_set<string> visited;
    queue<string> q;

    visited.insert(start_person);   // Mark BEFORE enqueuing
    q.push(start_person);

    while (!q.empty()) {
        string person = q.front();  // Take from FRONT
        q.pop();
        cout << "BFS: " << person << "\n";

        for (const string& connection : g.at(person)) {
            if (!visited.count(connection)) {
                visited.insert(connection);   // Mark BEFORE enqueuing
                q.push(connection);           // Add to BACK
            }
        }
    }
}

int main() {    
    // Hardcoded inside main() (No global variables, fast to test!)
    Graph social_network = {
        {"Alice",   {"Bob", "Charlie"}},
        {"Bob",     {"Alice", "David", "Eve"}},
        {"Charlie", {"Alice", "Frank"}},
        {"David",   {"Bob"}},
        {"Eve",     {"Bob", "Frank"}},
        {"Frank",   {"Charlie", "Eve"}}
    };

    unordered_set<string> visited;

    cout << "========== DFS from Alice ==========\n";
    dfs("Alice", social_network, visited);

    cout << "\n========== BFS from Alice ==========\n";
    bfs("Alice", social_network);

    return 0;
}
