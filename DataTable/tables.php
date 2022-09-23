<?php
$con = mysqli_Connect(
    "localhost",
    "Haider", 
    "Khan@123!",
    "MyPhonebook"
  );
if(mysqli_connect_errno()){
    echo "Error";
    exit();
    }
    else
   //echo  "Database connected";
    $query = "SELECT * FROM Phonebook WHERE 1";
    $result = mysqli_query($con,$query);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhoneBook</title>
    <link href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css" rel="stylesheet">

    

</head>
<body>
    <table class="table">
        <thead>
        <tr>
        <td> ID </td>
        <td> Name </td>
        <td> Contact </td>
        </tr>
        <tbody>
        <?php while($row=mysqli_fetch_assoc($result)){
                        ?>
            <tr>
                <td>  <?php  echo $row['PersonID'] ?>   </td>
                <td>  <?php  echo $row['Name'] ?>        </td>
                <td>  <?php  echo $row['ContactNum'] ?> </td>
            
            </tr>
            
            <?php } ?>
            </tbody>
        </thead>
    </table>
    
</body>
<script
			  src="https://code.jquery.com/jquery-3.6.1.min.js"
			  integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
			  crossorigin="anonymous"></script>

<script src="https://code.jquery.com/jquery-3.5.1.js">
    </script>
    <script>
        $(document).ready(function () {
    $('.table').DataTable();
});
</script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js">
    </script>
</html>
