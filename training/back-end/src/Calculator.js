/**
 * Created by Helen Tamayo on 6/18/2015.
 */
var Calculator = {
    sum: function(n,pos){
        if(pos==undefined)
            pos=n.length-1;
        if(pos==0)
            return n[0];
        this.ans = n[pos] + this.sum(n,pos-1);
        return this.ans;
    },

    avg: function(n,pos){
        if(pos==undefined)
            pos=n.length-1;
        if(pos==0)
            return n[0];
        return(n[pos] + this.sum(n,pos-1))/(n.length);
    },

    max: function(lista,pos,n){
        if(pos==undefined)
            pos=lista.length-1;
        if(pos==0 && n==undefined)
            return lista[0];
        if(n==undefined)
            n = lista[pos];
        if(pos<0)
            return n;
        if(lista [pos]>n)
            n=lista [pos];
        return this.max(lista,pos-1,n);
    },

    min: function(lista,pos,n){
        if(pos==undefined)
            pos=lista.length-1;
        if(pos==0 && n==undefined)
            return lista[0];
        if(n==undefined)
            n = lista[pos];
        if(pos<0)
            return n;
        if(lista [pos]<n)
            n=lista [pos];
        return this.min(lista,pos-1,n);
    },

    subtract: function(n,pos){
        if(pos==undefined)
            pos=n.length-1;
        if(pos==0)
            return n[0];
        this.ans = n[pos] - this.subtract(n,pos-1);
        return this.ans;
    },

    multiply: function(n,pos){
        if(pos==undefined)
            pos=n.length-1;
        if(pos==0)
            return n[0];
        this.ans = n[pos] * this.multiply(n,pos-1);
        return this.ans;
    },

    divide: function(n,pos) {
        if (pos == undefined)
            pos = n.length;
        if (pos == 2)
            return this.ans = n[0] /n[pos-1];
        return this.ans;
    }

};