<?php
include 'db.php'; // Include your database connection

// Read the raw POST data
$input = file_get_contents('php://input');

// Decode the JSON data
$data = json_decode($input, true);

// Check if the data contains 'products' key and it's not empty
if (isset($data['products']) && !empty($data['products'])) {
    // Get the array of product IDs from the decoded JSON data
    $productIds = $data['products'];

    // Convert the array of IDs into a comma-separated string for the SQL query
    $ids = implode(',', array_map('intval', $productIds));

    // SQL query to delete products with the given IDs
    $query = "DELETE FROM produ WHERE id IN ($ids)";

    // Execute the query
    if ($mysqli->query($query)) {
        echo json_encode(['status' => 'success', 'message' => 'Products deleted successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Query failed: ' . $mysqli->error]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No products selected for deletion']);
}

// Close the connection
$mysqli->close();
?>
