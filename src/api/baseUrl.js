export default function getBaseUrl() {
    //const inDevelopment = window.location.hostname == 'localhost';
    //return inDevelopment ? 'http://localhost:3001/' : '/';

    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://peaceful-garden-12754.herokuapp.com/';
}


function getQueryStringParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
