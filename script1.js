<script>
// JavaScript code to display the location of the current page
document.addEventListener('DOMContentLoaded', function() {
  var pageLocation = document.getElementById('pageLocation');
  pageLocation.textContent = "Current Location: " + window.location.href;
});
</script>