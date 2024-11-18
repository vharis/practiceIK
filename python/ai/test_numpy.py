import numpy as np

# Create a 1D array
array_1d = np.array([1, 2, 3, 4, 5])
print("1D Array:", array_1d)

# Create a 2D array
array_2d = np.array([[1, 2, 3], [4, 5, 6]])
print("2D Array:\n", array_2d)

# Perform element-wise addition
array_sum = array_1d + 5
print("Element-wise addition:", array_sum)

# Perform matrix multiplication
matrix_a = np.array([[1, 2], [3, 4]])
matrix_b = np.array([[5, 6], [7, 8]])
matrix_product = np.dot(matrix_a, matrix_b)
print("Matrix multiplication result:\n", matrix_product)

# Calculate the mean of an array
mean_value = np.mean(array_1d)
print("Mean of 1D array:", mean_value)

# Calculate the standard deviation of an array
std_deviation = np.std(array_1d)
print("Standard deviation of 1D array:", std_deviation)