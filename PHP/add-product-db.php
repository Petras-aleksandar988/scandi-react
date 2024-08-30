<?php
include 'db.php'; // Include your database connection file

// Get the raw POST data
$data = json_decode(file_get_contents('php://input'), true);

// Check if data is received
if (isset($data['sku'], $data['name'], $data['price'], $data['type'])) {
    $sku = $mysqli->real_escape_string($data['sku']);
    $name = $mysqli->real_escape_string($data['name']);
    $price = $mysqli->real_escape_string($data['price']);
    $type = $mysqli->real_escape_string($data['type']);
    
    // Optional fields based on type
    $size = isset($data['size']) ? $mysqli->real_escape_string($data['size']) : null;
    $weight = isset($data['weight']) ? $mysqli->real_escape_string($data['weight']) : null;
    $height = isset($data['height']) ? $mysqli->real_escape_string($data['height']) : null;
    $width = isset($data['width']) ? $mysqli->real_escape_string($data['width']) : null;
    $length = isset($data['length']) ? $mysqli->real_escape_string($data['length']) : null;
    
    // Check if SKU is unique
    $checkQuery = "SELECT * FROM produ WHERE sku = '$sku'";
    $checkResult = $mysqli->query($checkQuery);
    
    if ($checkResult->num_rows > 0) {
        echo json_encode(['status' => 'errorSku']);
    } else {
        // Prepare the SQL query based on type
        $query = "INSERT INTO produ (sku, name, price, product_type";
        
        // Add optional fields to query if they exist
        if ($type === 'dvd') {
            $query .= ", size";
        } elseif ($type === 'book') {
            $query .= ", weight";
        } elseif ($type === 'furniture') {
            $query .= ", height, width, length";
        }
        
        $query .= ") VALUES ('$sku', '$name', '$price', '$type'";
        
        // Add optional values to query if they exist
        if ($type === 'dvd') {
            $query .= ", '$size'";
        } elseif ($type === 'book') {
            $query .= ", '$weight'";
        } elseif ($type === 'furniture') {
            $query .= ", '$height', '$width', '$length'";
        }
        
        $query .= ")";
        
        // Execute the query
        if ($mysqli->query($query)) {
            echo json_encode(['status' => 'success', 'message' => 'Product added successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Query failed: ' . $mysqli->error]);
        }
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
}

// Close the connection
$mysqli->close();
?>
