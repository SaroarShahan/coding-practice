#include <iostream>
#include <cmath>
#include <iomanip>

using namespace std;

int main() {
    double r, area = 0;

    cin >> r;
    area = 3.14159 * pow(r, 2);
    cout <<fixed<<setprecision(4) << "A=" << area << endl;
    return 0;
}
