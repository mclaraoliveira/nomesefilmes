function redirecionar() {
    var entrada = document.getElementById("nome").value;
  
    if (entrada.length > 0) {
      var primeiraLetra = entrada.charAt(0).toLowerCase();
      var urls = {
        a: (window.location.href = "filmesa.html"),
        b: (window.location.href = "filmesb.html"),
        c: (window.location.href = "filmesc.html"),
        d: (window.location.href = "filmesd.html"),
        d: (window.location.href = "filmesd.html"),
        e: (window.location.href = "filmese.html"),
        f: (window.location.href = "filmesf.html"),
        g: (window.location.href = "filmesg.html"),
        h: (window.location.href = "filmesh.html"),
        i: (window.location.href = "filmesi.html"),
        j: (window.location.href = "filmesj.html"),
        k: (window.location.href = "filmesk.html"),
        l: (window.location.href = "filmesl.html"),
        m: (window.location.href = "filmesm.html"),
        n: (window.location.href = "filmesn.html"),
        o: (window.location.href = "filmeso.html"),
        p: (window.location.href = "filmesp.html"),
        q: (window.location.href = "filmesq.html"),
        r: (window.location.href = "filmesr.html"),
        s: (window.location.href = "filmesshtml"),
        t: (window.location.href = "filmest.html"),
        u: (window.location.href = "filmesu.html"),
        v: (window.location.href = "filmesv.html"),
        w: (window.location.href = "filmesw.html"),
        x: (window.location.href = "filmesx.html"),
        y: (window.location.href = "filmesy.html"),
        z: (window.location.href = "filmesz.html"),
      };
  
      if (urls[primeiraLetra]) {
        window.location.href = urls[primeiraLetra];
      } else {
        alert("Não há lista correspondente para a inicial digitada.");
      }
    } else {
      alert("Por favor, digite seu nome.");
    }
  }
