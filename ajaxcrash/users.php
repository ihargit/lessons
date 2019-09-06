<?php
// Create Connection (host, login, password, database name)
$conn = mysqli_connect('localhost', '***', '***', 'ajaxtest');

$query = 'SELECT * FROM users';

// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);