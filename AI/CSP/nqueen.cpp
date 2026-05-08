#include <iostream>
#include <vector>
using namespace std;

// ─────────────────────────────────────────
// N-Queens: Backtracking + Branch and Bound
// Branch  → try each column
// Bound   → O(1) conflict check via bool arrays
// Backtrack → undo placement when stuck
// ─────────────────────────────────────────
void solve(int row, int n,
           vector<int>& board,
           vector<bool>& col,
           vector<bool>& diag1,   // row - col + n
           vector<bool>& diag2,   // row + col
           int& count) {

    if (row == n) {
        cout << "Solution " << ++count << ": ";
        for (int r = 0; r < n; r++)
            cout << "(" << r << "," << board[r] << ") ";
        cout << "\n";
        return;
    }

    for (int c = 0; c < n; c++) {
        // BOUND: skip if column or diagonals are under attack
        if (col[c] || diag1[row - c + n] || diag2[row + c]) continue;

        // BRANCH: place queen
        board[row] = c;
        col[c] = diag1[row - c + n] = diag2[row + c] = true;

        solve(row + 1, n, board, col, diag1, diag2, count);

        // BACKTRACK: remove queen
        col[c] = diag1[row - c + n] = diag2[row + c] = false;
    }
}

int main() {
    int n;
    cout << "Enter N: "; 
    cin >> n;

    vector<int>  board(n, -1);
    vector<bool> col(n, false);
    vector<bool> diag1(2*n, false);
    vector<bool> diag2(2*n, false);
    int count = 0;

    solve(0, n, board, col, diag1, diag2, count);

    if (count == 0) cout << "No solution exists\n";
    else cout << "Total solutions: " << count << "\n";
}