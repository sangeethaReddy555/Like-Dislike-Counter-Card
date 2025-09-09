let c=0;
        let s=0
        let a=document.getElementById("like");
        let b=document.getElementById("dis")
        let r=document.getElementById("span")
        function add(){
            c++;
            a.textContent=c;
            r.textContent=c+s;
        }
        function sub(){
            s++;
            b.textContent=s;
            r.textContent=c+s;
        }
        