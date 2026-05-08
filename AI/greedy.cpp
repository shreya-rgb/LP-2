#include <iostream>
#include <vector>
#include <queue>
#include <limits.h>
#include <algorithm>
using namespace std;

// ═══════════════════════════════════════════
// 1. SELECTION SORT
// Greedy: always pick minimum from unsorted part
// ═══════════════════════════════════════════
void selectionSort(vector<int> arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIdx]) minIdx = j;  // GREEDY: find min
        swap(arr[i], arr[minIdx]);
    }
    cout << "Sorted: ";
    for (int x : arr) cout << x << " ";
    cout << "\n";
}

// ═══════════════════════════════════════════
// 2. KRUSKAL'S MST
// Greedy: always pick cheapest edge, skip if cycle
// Uses Union-Find to detect cycles
// ═══════════════════════════════════════════
struct Edge { int u, v, w; };

// Union-Find
int find(vector<int>& parent, int x) {
    if (parent[x] != x) parent[x] = find(parent, parent[x]);
    return parent[x];
}

bool unite(vector<int>& parent, vector<int>& rank, int x, int y) {
    int px = find(parent, x), py = find(parent, y);
    if (px == py) return false;  // same component → cycle
    if (rank[px] < rank[py]) swap(px, py);
    parent[py] = px;
    if (rank[px] == rank[py]) rank[px]++;
    return true;
}

void kruskal(int n, vector<Edge>& edges) {
    sort(edges.begin(), edges.end(), [](Edge& a, Edge& b) {
        return a.w < b.w;  // GREEDY: sort by weight
    });

    vector<int> parent(n), rank(n, 0);
    for (int i = 0; i < n; i++) parent[i] = i;

    int totalCost = 0;
    cout << "\nKruskal's MST edges:\n";
    for (auto& e : edges) {
        if (unite(parent, rank, e.u, e.v)) {  // no cycle → include
            cout << e.u << " - " << e.v << " : " << e.w << "\n";
            totalCost += e.w;
        }
    }
    cout << "Total MST cost: " << totalCost << "\n";
}

// ═══════════════════════════════════════════
// 3. DIJKSTRA'S SHORTEST PATH
// Greedy: always visit unvisited node with smallest distance
// ═══════════════════════════════════════════
void dijkstra(int src, int n, const vector<vector<pair<int,int>>>& graph) {
    vector<int> dist(n, INT_MAX);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;

    dist[src] = 0;
    pq.push({0, src});

    while (!pq.empty()) {
        // auto [d, u] = pq.top(); pq.pop();
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();

        if (d > dist[u]) continue;  // outdated entry

        // for (auto& [v, w] : graph[u]) {
        for (auto& edge : graph[u]) {
            int v = edge.first, w = edge.second;
            if (dist[u] + w < dist[v]) {  // GREEDY: relax edge
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }

    cout << "\nDijkstra's shortest paths from node " << src << ":\n";
    for (int i = 0; i < n; i++)
        cout << "Node " << i << " : " << (dist[i] == INT_MAX ? -1 : dist[i]) << "\n";
}

// ═══════════════════════════════════════════
// INPUT + MAIN
// ═══════════════════════════════════════════
int main() {
    // ── Selection Sort ──
    int sz;
    cout << "Enter number of elements: "; cin >> sz;
    vector<int> arr(sz);
    cout << "Enter elements: ";
    for (int& x : arr) cin >> x;
    selectionSort(arr);

    // ── Graph input (shared for Kruskal + Dijkstra) ──
    int n, e;
    cout << "\nEnter nodes and edges: "; cin >> n >> e;
    cout << "Enter each edge as: u v weight\n";

    vector<Edge> edges(e);
    vector<vector<pair<int,int>>> graph(n);

    for (auto& edge : edges) {
        cin >> edge.u >> edge.v >> edge.w;
        graph[edge.u].push_back({edge.v, edge.w});  // undirected
        graph[edge.v].push_back({edge.u, edge.w});
    }

    kruskal(n, edges);

    int src;
    cout << "\nEnter source node for Dijkstra: "; cin >> src;
    dijkstra(src, n, graph);

    return 0;
}