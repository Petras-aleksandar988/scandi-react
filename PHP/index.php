<?php
include 'db.php';

// Query to select all products
$query = "SELECT * FROM produ ORDER BY id DESC";

// Execute the query
$result = $mysqli->query($query);

if ($result) {
    $products = [];
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    echo json_encode(['status' => 'success', 'products' => $products]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Query failed: ' . $mysqli->error]);
}

// Close the connection
$mysqli->close();
?>
