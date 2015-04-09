

(function(exports){
  /*
   * Takes in marked up language or html and adds attributes to html
   * Usage:
   *    `block`{style="background:red".class-name.class-name2#id-name}
   * Becomes:
   *    <code id="id-name" class="class-name class-name2" style="background:red">block</code>
   * 
   */
  var parse = function(s,callback){
    
    s = remSpecial(s);
    
    var rep = function(match,p1,p2,p3,p4,p5){
      p5 = build(p5);
      var str =  p1+' '+p5+p2+p3+p4;
      return str;
    }
    var re = /(<img|<code|<li|<a)(>| )(.*?)(>|<\/code>|<\/li>|<\/a>)\{(.*?)\}/g;
    var r = s.replace(re,rep);
    if(callback){
      var err = null;
      callback(err,r);
    }else{
      return r;
    }
  }
  /*
   * Remove the special characters
   */
  var remSpecial = function(s){
    //TODO may need to replace
    return s.replace(/&quot;/g,'"');
  }

  var build = function(s){ //inner without {}
    
    var f = function(e,i,a){
      a[i] = e.substring(1); //remove first char of a string
    }
    
    var id = '';
    var cls = '';
    var attr = '';
    var t;
    
    //id only take the first one if have one
    t = s.match(/#([\w-_]+)/g);
    if(t){
      t.forEach(f);
      id ='id="'+t[0]+'"'; //take the first one
    }

    //class
    t = s.match(/(?:\.)([\w-_]+)/g);
    if(t){
      t.forEach(f);
      cls = 'class="'+t.join(" ")+'"';
    }

    //attributes
    t = s.match(/(\w+)=".*?"/g);
    if(t){
      attr = t.join(" ");
    }
    
    return [id,cls,attr].join(' ').trim();
  }
  
  exports.parse = parse;
  
  
})(typeof exports === 'undefined' ? this['markdown_attr']={}: exports);