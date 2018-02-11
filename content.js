var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) {
    var search = '| <form method="get" action="//hn.algolia.com/" style="display: inline;">Search <input type="text" name="q" value="" size="17" autocorrect="off" spellcheck="false" autocapitalize="off" autocomplete="false"></form>'
    table = document.getElementsByClassName('pagetop')[0];
    table.insertAdjacentHTML('beforeend',search)}
    clearInterval( tid );       
} );