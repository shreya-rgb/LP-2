#include <iostream>
#include <vector>
using namespace std;

// ─────────────────────────────────────────
// Graph Coloring: Backtracking + Branch and Bound
// Branch   → try each color for current node
// Bound    → skip if neighbor has same color (isSafe)
// Backtrack → color[node] = 0, try next color
// ─────────────────────────────────────────
bool isSafe(int node, int color, const vector<vector<int>>& graph, const vector<int>& colors) {
    for (int neighbor : graph[node])
        if (colors[neighbor] == color) return false;  // BOUND
    return true;
}

bool solve(int node, int n, int maxColors,
           const vector<vector<int>>& graph,
           vector<int>& colors) {

    if (node == n) return true;  // all nodes colored

    for (int c = 1; c <= maxColors; c++) {
        if (isSafe(node, c, graph, colors)) {  // BOUND
            colors[node] = c;                  // BRANCH

            if (solve(node + 1, n, maxColors, graph, colors))
                return true;

            colors[node] = 0;                  // BACKTRACK
        }
    }
    return false;
}

int main() {
    int n, e;
    cout << "Enter nodes and edges: "; 
    cin >> n >> e;

    vector<vector<int>> graph(n);
    cout << "Enter each edge (0-indexed) as: u v\n";
    for (int i = 0; i < e; i++) {
        int u, v; cin >> u >> v;
        graph[u].push_back(v);  // undirected
        graph[v].push_back(u);
    }

    int maxColors;
    cout << "Enter number of colors: "; cin >> maxColors;

    vector<int> colors(n, 0);  // 0 = uncolored

    if (solve(0, n, maxColors, graph, colors)) {
        cout << "\nColoring found:\n";
        for (int i = 0; i < n; i++)
            cout << "Node " << i << " -> Color " << colors[i] << "\n";
    } else {
        cout << "No valid coloring with " << maxColors << " colors\n";
    }
}