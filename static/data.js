function displayData(data) {
    var dataTable = $('#table_data').DataTable({
                  keys: true,
                  data: data,
                  columns: [
                      { data: 'id'},
                      { data: 'type'},
                      { data: 'breeds.primary'},
                      { data: 'colors.primary'},
                      { data: 'age'},
                      { data: 'gender'},
                      { data: 'status'}
                  ]
              });
    $('#table_data tbody').on('click', 'tr', function () {
        var popData = dataTable.row(this).data();
        alert( 'You clicked on '+ 'test' +'\'s row' );
        console.log(popData)
    } );
    
}