$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        $(document).ready(function () {
            // Trigger and display the photo viewer plugin
            $('#photo-viewer').photoViewer();
        
            // Bind click event on a.photo-box
            $('#photo-viewer').on('click', 'a.photo-box', function (e) {
                e.preventDefault();
        
                // Set the href of the a.photo-box to the href of the clicked thumbnail
                var thumbnailHref = $(this).attr('href');
                $('a.photo-box').attr('href', thumbnailHref);
        
                // Open modal and display the cloned image
                var modal = $('#myModal');
                modal.find('#modalImage').attr('src', thumbnailHref);
                modal.css('display', 'block');
            });
        
            // Close modal on close button click
            $('#myModal').on('click', '.close', function () {
                $('#myModal').css('display', 'none');
            });
        });
        
    });
});
