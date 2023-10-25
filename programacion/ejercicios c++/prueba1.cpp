#include <iostream>
#include <vector>
#include <string>

void sumarDos(const std::vector<int>& arr, int total) {
    for (int i = 0; i < arr.size(); i++) {
        int resta = total - arr[i];
        
        for (int j = 0; j < arr.size(); j++) {
            if (resta == arr[j] && arr[i] != arr[j]) {
                std::cout << resta << " y " << arr[i] << " suman " << total << std::endl;
            }
        }
    }
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5};
    int total = 7;
    
    sumarDos(arr, total);
    
    return 0;
}

//----------------------------------------------------------------------------------------------

std::string eliminarRepe(const std::string& str) {
    std::string resultado = "";
    for (int i = 0; i < str.length(); i++) {
        if (str[i] != str[i+1]) {
            resultado += str[i];
        }
    }
    return resultado;
}

int main() {
    std::string repe = "aabccccdde";
    std::string resultado = eliminarRepe(repe);
    std::cout << "Cadena original: " << repe << std::endl;
    std::cout << "Cadena sin caracteres repetidos consecutivos: " << resultado << std::endl;
    return 0;
}

//---------------------------------------------------------------------------------------

std::vector<int> binarySearch(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    std::vector<int> path;

    while (left <= right) {
        int mid = (left + right) / 2;
        path.push_back(arr[mid]);

        if (arr[mid] == target) {
            return path;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {};
}

int main() {
    std::vector<int> array = {1, 2, 3, 4, 5, 6, 7};
    int target = 5;
    std::vector<int> result = binarySearch(array, target);

    if (result.empty()) {
        std::cout << "Valor no encontrado" << std::endl;
    } else {
        std::cout << "Camino de búsqueda: ";
        for (int num : result) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}

//-----------------------------------------------------------------------

void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; i++) {

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    std::vector<int> arr = {5, 2, 8, 12, 1, 6};
    std::cout << "Arreglo original: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    bubbleSort(arr);

    std::cout << "Arreglo ordenado: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}