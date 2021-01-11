GLClient.mockEngine.addMock("*", ".ext-public", function(elem) {
  var ret = "<div id='header-topbar' class='row'>";
  ret += "<div class='col-md-4 text-left large-anchor'>www.elMeuWeb.cat</div>";
  ret += "<div class='col-md-6 col-sm-6 col-6 text-left large-mobile'>www.elMeuWeb.cat</div>";

  if (GLClient.language === 'ca') {
    ret += "<div class='col-md-4 text-center large-anchor'><a href='/#/?lang=es'>Castellano</a></div>";
	ret += "<div class='col-md-6 col-sm-6 col-6 text-right large-mobile'><a href='/#/?lang=es'>Castellano</a></div>";
  } else {
    ret += "<div class='col-md-4 text-center large-anchor'><a href='/#/?lang=ca'>Català</a></div>";
	ret += "<div class='col-md-6 col-sm-6 col-6 text-right large-mobile'><a href='/#/?lang=ca'>Català</a></div>";
  }

  ret += "<div class='col-md-4 text-right large-anchor'>ajuntament.elMeuWeb.cat</div>";
  ret += "<div class='header-logo'><img src='data:image/png;base64,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'></img></div>";
  
  
  
  ret += "</div>";
  

  return ret;
}, 'add-before');

GLClient.mockEngine.addMock("*", "#PrivacyBadge", function(elem) {
  var ret = "<div class='row'>";

  if (GLClient.language === 'ca') {
    ret += "<div class='col-md-12 text-center'>Si no vols deixar el rastre de l'adreça IP i vols navegar de manera anònima, utilitza el navegador <a rel='noreferrer noopener' href='https://ajuntament.elMeuWeb.cat/bustiaetica/ca/comunicacions-anonimes' target='_blank'>Tor</a></div>"
  } else {
    ret += "<div class='col-md-12 text-center'>Si no deseas dejar el rastro de la dirección IP y quieres navegar de forma anónima, utiliza el navegador <a rel='noreferrer noopener' href='https://ajuntament.elMeuWeb.cat/bustiaetica/ca/comunicacions-anonimes' target='_blank'>Tor</a></div>"
  }
  ret += "</div>";

  return ret;
});

GLClient.mockEngine.addMock("*", ".ext-public #HeaderBox", function(elem) {
  var ret = "<div class='row'>";
  ret += "<div class='col-md-12'>";

  if (GLClient.language === 'ca') {
    ret += "<div class='homepage-text1'>[[TEST]] Bústia Ètica i de Bon Govern</div>";
    ret += "<div class='homepage-text2'>Oficina per a la Transparència i les Bones Pràctiques</div>";
  } else {
    ret += "<div class='homepage-text1'>[[TEST]] Buzón Ético y de Buen Gobierno</div>";
    ret += "<div class='homepage-text2'>Oficina para la Transparencia y las Buenas Prácticas</div>";
  }

  ret += "</div>";

  return ret;
});

GLClient.mockEngine.addMock("*", "#WhistleblowingQuestion", function(elem) {
  var ret = "<div class='row'>";

  if (GLClient.language === 'ca') {
    ret += "<div class='col-md-12'><span class='homepage-text5'>Nova comunicació</span></div>"
  } else {
    ret += "<div class='col-md-12'><span class='homepage-text5'>Nueva comunicación</span></div>"
  }
  ret += "</div>";
  ret += "<div class='row'>";

  if (GLClient.language === 'ca') {
    ret += "<div class='col-md-12'><span class='homepage-text6'>Utilitzant l'aplicació podreu fer que s'investigui el cas i s'actuï per millorar la integritat del sector públic. Assegureu-vos de conèixer l'<a href='https://ajuntament.elMeuWeb.cat/bustiaetica/ca/ambit-dactuacio'>àmbit d'actuació</a> i les <a href='https://ajuntament.elMeuWeb.cat/bustiaetica/ca/comunicacions-anonimes'>eines d'anonimat</a>.</span></div>"
  } else {
    ret += "<div class='col-md-12'><span class='homepage-text6'>Utilizando la aplicación podrás hacer que se investigue el caso y se actúe para mejorar la integridad del sector público. Asegúrate de conocer el <a href='https://ajuntament.elMeuWeb.cat/bustiaetica/es/ambito-de-actuacion'>ámbito de actuación</a> y las <a href='https://ajuntament.elMeuWeb.cat/bustiaetica/es/comunicaciones-anonimas'>herramientas de anonimato</a>.</span></div>"
  }

  ret += "</div>";

  return ret;
});

GLClient.mockEngine.addMock("*", "#WhistleblowerLoginQuestion", function(elem) {
  var ret = "<div class='row'>";

  if (GLClient.language === 'ca') {
    ret += "<div class='col-md-12'><span class='homepage-text5'>Seguiment de la comunicació</span></div>"
  } else {
    ret += "<div class='col-md-12'><span class='homepage-text5'>Seguimiento de la comunicación</span></div>"
  }

  ret += "</div>";
  ret += "<div class='row'>";

  if (GLClient.language === 'ca') {
    ret += "<div class='col-md-12'><span class='homepage-text6'>Si voleu consultar l'estat de tramitació o aportar més informació sobre una comunicació anterior, introduïu el codi numèric d'accés:</span></div>"
  } else {
    ret += "<div class='col-md-12'><span class='homepage-text6'>Si quieres consultar el estado de tramitación o aportar más información sobre una comunicación anterior, introduce el código numérico de acceso:</span></div>"
  }

  ret += "</div>";

  return ret;
});

GLClient.mockEngine.addMock("*", "#WhistleblowerBox", function(elem) {
  var ret = "<div class='row'>";
  ret += "<div class='col-md-12'>";
  ret += "<img id='MailboxImg' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4REZDREEyRTk5QzExMUU2QThGMEQxOUNBQTdDMjcxRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4REZDREEyRjk5QzExMUU2QThGMEQxOUNBQTdDMjcxRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhERkNEQTJDOTlDMTExRTZBOEYwRDE5Q0FBN0MyNzFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERkNEQTJEOTlDMTExRTZBOEYwRDE5Q0FBN0MyNzFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5v0/GgAACtpJREFUeNrsXQ2QVWUZfhcyV5OwoviZLCIzUWZyjCKjjFTwL8VRtPwpsYSwBiu0ZkwRE0stITWzHzTCUnTUiaYyg1JgiBhdNCmTXbQyGQULI4J0Xdbtffrezevd7/zde86955z7PDPPsOz53/uc7/39vtvW19cnBBEXg/gnICgYgoIhKBiCgiEoGIKgYAgKhqBgCAqGoGAICoYgKBiCgiEoGIKCISgYgoIhCAqGoGAICoagYAgKhiAoGIKCISgYgoIhKBiiBfCqZt/A3dMWRu2yTDm1xJ/BV5SX1XrwKXfN4QhD0CQRFAxBwRQD5yjbCszrKBiCIwxB5DKsJjJLV+yn/9yjfJNyk7Gzgo9pSN7XqoJ5o/LghMf8Q/nHEmvmE8px9jNEM7Fq+8+VJ7SqYG5QnpbwmF7la5X/KalgDozYfnwrm6Q9lU8oz425/3Tl2cpXl1gwYyO2/63VfZidypUx953UAm7MOyK2d9HpDcf5ynnKN4fsM1j5deUbUrrmjcoHmuDwjjRzG4aNFEwwDjYhrFO+ELIfTNRJKQrm/mYIRvHOGPtwhAnxb25Vvmh+S1go+bzy7SV45jiCeayWE5cxcXeecr6y3f5/ufJdytnKJ1tkRD0wxj5dFIzD/spLlB3KWcovKn+iXNJC/lqUw4vIcDNNksMFyg3K65XfUW5VfjrB8WeIS3TVi5dMqE/lMKTuqiXLW2YfZok5nFcqf6j8e8zjhtj+e6ToP32jwRESHPfRWURIZXd6kZg6M+Ex/1aOUQ5L4fq9tTqWdeKAGK5GJwWTHjbXat8L4r/U7PCWTTBwdlfG3Hd0iQUfJ0JqeZO0XLlvgv3/qlxvJqhsyCxpVybB3GgkogWzWSOknbWenB13rWeSuuo5OQVTImhIPSyGae6s5xp5N0lvUx4UY7+zlNMSnnubcoa4BFszMdE+5O0pnGtsjH1KKRhMx5ipXKB8TYz9IZajE/wxRiiHi8sKb2/ysx6lfFRc89cv6zzXAVlGSHkVzFuUNyknJzwOYjkk5r6XieuNyQtGiWvYvslEvCOvI0zefJjp4upAk+s8z8eVb634/942Yu0d49h2MxH1cmgN932uPf+Ha3zuqKRdt9TYmpm3EWakvV3HpXCu14urB/1Z+X7lc/AHlcfY734dcuw+ymfs3zTweUk+0xFCv8/SBKi0J+k5joyQNKR+qeiCQYfbzfZBpwEI5Av2Qf3UbDbE8mPlbyKO3aWcK8mSgGFYXsexn1FOUZ6s/EOMCAkF0zFZhtRNF4w+5LH29qdtGq+3CAtv+GHKVcpPSXi3ndj2a3NkovvLHfDNotokxsT4POsuhjbbh5mf4T10VPyMKOTFgqZXMPJenII5SmWEabZgDsnovB9ULhbXPPWwDe+zpbg4LAWHt+4IKQ8+zOAMzjnEfJcecbP7EBWsM1OzVlzRMQh7KX9vOZp6Aefyc8ofpXCuOBHX2FYQTBbANBK0Rt5eIQ4k9S63EScMMFvo1BuRkmCeaOBzRyXttmiE9C8KZiB6zMGtxOPienWjgC65WQV97kyLjmUUzF4JfKIRZXpDNNp8nUS3lXaWVTBba/AhemxIfjjhcbtz+PzPSvJZC5l22eVdMBeJ67a/RvyFR5ib++SVKW4sVntrwutgJsHOBj/boRK8zAYyzKieTzZnOQky7bLLu2CQPPuucoW4FP8Hqrbj/1gI6HzbDjwlzZn/k+Tv/GVxWWTf3/wO5WfFtVzUUkfLbGpsNfLcQIUIY5LySzIw6YbQebGFz8Ml34C5+J24Fb+rxYIyxseM2+q4RpRgYLKfLLtg+qMWTAR7d4B/cqKNNqfk8N7xt0VpAnmd8Z7taGcYZ6NL1iH14xpS724FwfQDopggrpTQW7UN0cFd4oqL++bkfkeLK3R+0/yxSmCmwkzzZZ5JIUIaHEMwnWm+BUXKr1wqLk3u+wNgliNqRlOafJ9wyjeIf5UrFEGxksSiFK+HHp+oqb0bW1Ew/XjQ8i3XycDqMzrXfiWul2SfBt8Xcju/ENfXM6RqW7dFckco/5LmRdXUYMRCFntLyG4bWlkwwAvmHxwpblJaNc4zn2dig+7nNBvdfA1g603gME+ZNJyraOYpR5pJfo+4JVdhvlEeuVpcC0lq4V6Rcb8N8QtlYDkAvSSrLZ9zqb3lYdjDhIZcyb3mjEb1z2BpsxssyqkGnMwrlF+VBiUIrVbUIa9s7Ujdky860DCNXtiPyMDi4iALyzskvGyAdohHzMxhWbOl4pKDYeHqcTbU+8TyJ+X7LJTeLSVCmSaywX/A4od3eraNM9/n4qpRFSPEzTYSVbcHTDJBwD9or/g9fKPv2/VGVR2DEWmBpQHWSwlRtpmP28yfQGX6OY/5hYlYIy6ZNt2irU+GnA+L8yA7i57ao2wkws8zPPvCl/qQ8kIJX6mz0Cjr+jBLLYRd5HFEJ5iDGvSybJGB1Wz4QytsBGnzHLPIoqCdUnKUeW710+bXIEm2K8ZzYxEhZIyx8DPqVL6lQNo81zjerlF6sZR5hKn0KRbZB/29gH16LdKZWyGSb1koCid4WshxZ1mk1iwMu3vaQlS2e+Tlr7XZpNHSLgqmNgy3/MfpAdvhCKPD7qGAEepUM2nfloGrVg02M4Ve4XmeUawRuNrng6mIMFqinDJXxZNqiF1WkzTIciqdAWJBKD7bQt+HIs51j0VfV3lCZIgGc6HROnBiE55zfMDvYVYxeW8+fZhoIJGH2QEoD/i67e+0KAlmKG7mFdNVL7Jczm892/HtZ2i1WGY/N+qliCo69lAwwUB33jWW/5jg2Y4azrEWdtdaJX7UQmuE1f/0bJ8qLmk3pwHmHqtctEfs00XB+DHVzMIFMnCuE8zIlWZW7k3JkUaBEVngWzzbkdhbYP7RezN85oZ12ZVJMPuZGQgyBWvMRKE98vmUr42eYJQRjhB/uwXM1zpzmIdm8OxxvnVlEwXzcnTX72xO9WxHlhfFyMPNRGSJ/gIoIqVuT94G03TRj/LRlK8bp01iIwXj/JMOCZ5VsMSG6x9IdLU5LUAoqDmhZuVbfwaZ49vNJKb1fUxY3gztGxeaiUQ9rLInZqWG1M+2ch5mqPkis8Sfnt9oofTKJt4jZlii6/8My/9Uzy862vIjqGmhV7neFSXWqijWVuVg8NV9o+xepFUFc7p9AMMD3u7+D6A7J/d7m+VvkLuZWSXwdrvfM038q9O8sAoIOaYdWT1Y3k0Shu/l9gH4xLLCzMAVORJLP7abILBsmq9FEu0Uq8x0DivIi5tbwaCt4BLLe/gmdm21YX9KVkNvikCkhP6YoPXqzjFzOj3A1FIwEcAbie43pLX39ORA8C1ryNQuLZD/tducdIwqP/NsRyPXYvO/cv0lpXn0YWYE/P4RG+LXSXGB+eCoOWEhSFTEq79D+3COMPVjlw3n4wsulkoss9EGjnxvkW4874JBQe8gG85L1UwtruFqjr0IDxblpvMcVi+xN/FQY5lxlZnbyRRM7TjbSNAk/R+9/AhiYQcF47CGWoiF1RSMA2YldlMPoUCS8msUjPyv7vGAuCXIVpUwCqoXmAyHmQvoO346LzfV1tfXx4+GKIxJIigYgoIhCAqGoGAICoagYAgKhqBgCIKCISgYgoIhKBiCgiEoGIKgYAgKhqBgCAqGoGAICoYgKBiCgiEoGIKCISgYgqBgCAqGoGAICoagYAgKhiAoGCIF/FeAAQBLNSOw5CgAlwAAAABJRU5ErkJggg=='></img>";

  if (GLClient.language === 'ca') {
    ret += "<div class='homepage-text3'>Canal segur de participació per enfortir la integritat del sector públic</div>";
    ret += "<div class='homepage-text4'>Si heu detectat una mala praxi i podeu aportar proves respecte d'això, envieu la informació a través d'aquest canal.</div>";
  } else {
    ret += "<div class='homepage-text3'>Canal seguro de participación para fortalecer la integridad del sector público</div>";
    ret += "<div class='homepage-text4'>Si has detectado una mala praxis y puedes aportar pruebas al respecto, envía la información a través de este canal.</div>";
  }

  ret += "</div>";

  return ret;
}, 'add-before');

GLClient.mockEngine.addMock("*", "#WhistleblowingButton button", function(elem) {
  if (GLClient.language === 'ca') {
    return "<span>INICI DE LA COMUNICACIÓ</span>";
  } else {
    return "<span>INICIO DE LA COMUNICACIÓN</span>";
  }
});

GLClient.mockEngine.addMock("*", "#ReceiptButton span", function(elem) {
  if (GLClient.language === 'ca') {
    return "<span>ACCÉS</span>";
  } else {
    return "<span>ACCESO</span>";
  }
});

GLClient.mockEngine.addMock("*", "#FooterBox", function(elem) {
  var ret = "<div class='row'>";

  if (GLClient.language === 'ca') {
    ret += "<div class='col-md-4 text-center'><a rel='noreferrer noopener' href='https://ajuntament.elMeuWeb.cat/bustiaetica/ca/normes-reguladores'>Normes reguladores</a></div>";
    ret += "<div class='col-md-4 text-center'>Oficina per a la Transparència i les Bones pràctiques | Ajuntament de xxxxxxxxxx</div>";
    ret += "<div class='col-md-4 text-center'><span>Powered by <a rel='noreferrer noopener' href='https://www.globaleaks.org/'>GlobaLeaks</a>.</span><span>Projecte creat amb la col·laboració de <a href='https://xnet-x.net/ca/'><img src='/s/Xnet.png' alt='Xnet'></a></span></div>";
	ret += "<div class='footer-colaboracio'>Projecte creat amb la col·laboració de <a href='https://xnet-x.net/ca/'><img src='/s/Xnet.png' alt='Xnet'></a></div>";
  } else {
    ret += "<div class='col-md-4 text-center'><a rel='noreferrer noopener' href='https://ajuntament.elMeuWeb.cat/bustiaetica/ca/normes-reguladores'>Normas reguladoras</a></div>";
    ret += "<div class='col-md-4 text-center'>Oficina para la Transparencia y las Buenas Prácticas | Ajuntament de xxxxxxxxxx</div>";
    ret += "<div class='col-md-4 text-center'><span>Powered by <a rel='noreferrer noopener' href='https://www.globaleaks.org/'>GlobaLeaks</a>.</span><span>Proyecto creado con la colaboración de <a href='https://xnet-x.net/ca/'><img src='/s/Xnet.png' alt='Xnet'></a></span></div>";
	ret += "<div class='footer-colaboracio'><span>Projecte creat amb la col·laboració de <a href='https://xnet-x.net/ca/'><img src='/s/Xnet.png' alt='Xnet'></a></span></div>";
  }

  ret += "</div>";

  return ret;
});

/* 2020 */

GLClient.mockEngine.addMock("*", "#KeyCodeBox", function(elem) {	  
  return '<div class="key-icon"><img text="key symbol" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEFUlEQVR4Ae1aXYRVURSeqURERETM0xAxRE+lRPTaU0SJiCEihp6GYdLrEPOQKPcpekhERJRJKdFDopTJTSmlRJk0hkZ9X1qcs2ffuWudc+7+mbmLzzl337XXXt/a//vsgYG+9COwqiMwmDD7HfBtLzAMbAKGgI/AIvASeAvcA34CK0Z2gck08A74o8ACdG4Do8AGIFvZCc/vAhrSnXS+If8YsBbISibh7W+gEzFr+nPYYrdJXjbCwxuAlaBGn63hYMoR2ALnWFMaMlV12KpOphiE9XDqQY/JS9AYhORawqVA5CUI7A7JjAlHA5OXIDxFudFnBzZ97fwujjf5PIHyo8oZlN4kIastBp+VEEVY8BfA6nTT+qMu+0E3oUe/D8HuzYq2HyLffeA1wD0Bl8uHAa4jrPIYGfZYMzWh34IRa21+Rx4Omj7ZhkTuAaw2qc81SHBpo0SLs3PQH1F4ec1olz6w9QQVNlULeeqeVXrILsF53mL/fNH2muKPHr1zH2+ReShfVGb4Ab0rSl1RK/kTIgCbpWTl8w30LIccz5R2Ra3kT4gAWFdgFvIkZdUvrQVCBIBN2iKlJqrIaNUvBSxEAL4qSBRVOMVxrtcK1xgW+WxRbkKXXeAXYBmpOcdrZD+ULHapO6Yx3LTODAxaHZ1CnlJ/dZziOWKV5fVux06Qn+MoxRoA6vPUyHWYozjn8irniFwzWAdlZKkv22GiSgAkzwLyc09fdzvdqk+lugX2ayEU68luE0U4ss8CsYizXO4bokgK5DlesBsGlxTIs/ZLG6BQUUiFfNWDmFpxIvk2ELPPs2xOo9wyB5VUyD8C661BmaOwVMi34Mtyq8iexCUF8h/A7HhP2HUx2gR5jhl3gCrjBpe4/O4Q5ZJEU+RphzIMTAK8MMElcKeAMGBXAW6Hgzd3lPlPNOTpJAm9AnxkSETI43WJkBzPBwRDSzQiJWjIk7CQ4y5sHCjWajfykah1L1ZLngFwP25we8s+my15NkE672vOvjTqup+x2M+lZeA1H7GSl4BczodiZ0+rkpcgaL/2dPYg4j8a8hztqceFiG/En0V6lHka5dYSDXnW8kShFBKdBqT223innexES55EXwDuguQ00ljzK5681PQEyLriBsX9P8nflpoX8nxykXMgSUYGpzTkedDwCSiSl3fe7BgBopy/o9za8gQWhIzvyRFe5Ahe3K8zPLvPss8LKdauj7ikkXCxdnnnZuZ/nuzJg4fqHu8pKhaEA90FIOuaFz6aLzhzK4Ws735A6QKBRMV5cnNzC+CJa7E7OGrp/6waADLjSD+VPsXlPfQFgDevNPIeSueARY1yqjq+AGi6AMnvA/jMWtZ5vL+ONPbt4hKWn5Wlr8/j/RiQPXlw6Es/Av0IrPII/AW+DTcH8Te3CQAAAABJRU5ErkJggg==" width="64" height="64"></div>' + elem.innerHTML;
});

GLClient.mockEngine.addMock("*", "#KeyCodeBox + div", function(elem) {

  var ret = "";

  if (GLClient.language === 'ca') {		
	ret += '<p>Cal conservar aquest codi de setze d&iacute;gits per</p>';
	ret += '<ul>';
	ret += '<li>accedir a la comunicaci&oacute;.</li>';
	ret += '<li>comunicar-se amb l\'&ograve;rgan gestor de la b&uacute;stia i consultar els missatges rebuts.</li>';
	ret += '<li>afegir fitxers o informaci&oacute; addicional.</li>';
	ret += '<li>con&egrave;ixer l\'estat de tramitaci&oacute; de la comunicaci&oacute;.</li>';
	ret += '</ul>';
	ret += '<p>L\'&ograve;rgan gestor de la b&uacute;stia utilitzar&agrave;, de manera priorit&agrave;ria, aquest canal segur, i garantir&agrave;';
	ret += ' l\'anonimat i la confidencialitat de les comunicacions.</p>';	      
  } else {	  
	ret += '<p>Hay que conservar este c&oacute;digo de diecis&eacute;is d&iacute;gitos para: </p>';
	ret += '<ul>';
	ret += '<li>Acceder a la comunicaci&oacute;n.</li>';
	ret += '<li>Comunicarse con el &oacute;rgano gestor del buz&oacute;n y consultar los mensajes recibidos.</li>';
	ret += '<li>A&ntilde;adir ficheros o informaci&oacute;n adicional.</li>';
	ret += '<li>Conocer el estado de tramitaci&oacute;n de la comunicaci&oacute;n.</li>';
	ret += '</ul>';
	ret += '<p>El &oacute;rgano gestor del buz&oacute;n utilizar&aacute;, de manera prioritaria, este canal seguro, y garantizar&aacute; el anonimato y la confidencialidad de las comunicaciones.';
  }  

  return ret;
});

GLClient.mockEngine.addMock("*", "#KeyCodeBox + div + div", function(elem) {
	
	var loginFromReceiptButton = function(texto) {
		var keyCode = angular.element(document.body).injector().get('Authentication').submission.receipt;
		var encodedText = texto.replace("{0}", "'" + keyCode + "'");
		var div = document.createElement('div');
		div.innerHTML = encodedText;
		var decoded = div.firstChild.nodeValue;		
		if (confirm(decoded)) {
			angular.element(document.body).injector().get('Authentication').login(0, 'whistleblower', keyCode);
		}
	}
	
	if (GLClient.language === 'ca') {		
		elem.addEventListener("click", function() {
			loginFromReceiptButton('Recorda copiar el codi d&lsquo;acc&eacute;s {0}. En cas contrari no podr&agrave;s tornar a accedir al canal segur de comunicaci&oacute;');
		});
		return '<button id="ReceiptButton" class="float-right btn btn-secondary" data-translate="">Accedeix a la comunicaci&oacute;</button>';
	} else {
		elem.addEventListener("click", function() {
			loginFromReceiptButton('Recuerda copiar el c&oacute;digo de acceso {0}. En caso contrario no podr&aacute;s volver a acceder al canal seguro de comunicaci&oacute;n.');
		});
		return '<button id="ReceiptButton" class="float-right btn btn-secondary" data-translate="">Acceder a la comunicaci&oacute;n</button>';
	}	
});

GLClient.mockEngine.addMock("*", ".ext-public #link-reload", function(elem) {
	var ret = "";
	elem.addEventListener("click", function() {
		angular.element(document.body).injector().get('Authentication').logout();
		document.location.href = "/";
	});
	if (GLClient.language === 'ca') {
		ret = "Surt";		
	} else {
		ret = "Salir";
	}
	return ret;
});

GLClient.mockEngine.addMock("*", "#TipPageWBFileUpload .card-header", function(elem) {
	var ret = "";
	if (GLClient.language === 'ca') {
		ret = 'Els arxius adjunts per al comunicador' + '<div style="margin-top:55px" class="alert alert-warning" role="alert">' +
			  '<i class="fas fa-exclamation-triangle"></i>&nbsp;<b>Alerta</b>&nbsp;El receptor adjunta aquests arxius a la comunicaci&oacute;' +
			  '</div>';		
	} else {
		ret = 'Los ficheros adjuntos para el comunicador' + '<div style="margin-top:55px" class="alert alert-warning" role="alert">' +
			  '<i class="fas fa-exclamation-triangle"></i>&nbsp;<b>Alerta</b>&nbsp;El receptor adjunta estos archivos a la comunicaci&oacute;n' +
			  '</div>';
	}
	return ret;
});


