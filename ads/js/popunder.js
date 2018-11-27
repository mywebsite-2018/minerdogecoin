var control_cca_pop;
if(control_cca_pop == undefined){
    control_cca_pop = true;
    function pop_cookie(cookie_name){
        var results = document.cookie.match( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
        if(results)return (unescape(results[2]));
        else return null;
    }    
    var c_pop = pop_cookie('_pop_cca');
    if(c_pop == null){
        var url;
        function cca_pop_click(){
            window.open(url,'_blank');
            document.getElementById('cca_pop').style.display = 'none';
            var nf=new Date();
            nf.setMinutes(20+nf.getMinutes());
            document.cookie = "_pop_cca=500; path=/; expires=" + nf.toGMTString();
        }
        function cca_pop_win(){            
            var div = document.createElement('div');            
            div.id = 'cca_pop';
            div.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100;";
            div.innerHTML = '<div style="width: 100%; height: 100%;" onclick="cca_pop_click()"></div>';
            document.body.appendChild(div);
        }
        function getXmlHttp(){
            var xmlhttp;
            try{
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch(e){
                try{
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(E){
                    xmlhttp = false;
                }
            }
            if(!xmlhttp && typeof XMLHttpRequest != 'undefined'){
                xmlhttp = new XMLHttpRequest();
            }
            return xmlhttp;
        }                
        var a = window.location.hostname;
        var xmlhttp = getXmlHttp();
        xmlhttp.open('POST', 'https://cryptocoinsad.com/ads/js/popunder.php', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlhttp.send("a=" + encodeURIComponent(a));
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4){
                if(xmlhttp.status == 200){
                    url = xmlhttp.responseText;
                    if(url != false) setTimeout(cca_pop_win, 3000); 
                }
            }
        }
    }    
}
