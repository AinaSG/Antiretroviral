# Antiretroviral
Script de Greasemonkey para tratar el SIDA de Youtube.

Este es un script que esconde automaticamente de YouTube una lista predeterminada de canales. (p.e. Youtubers odiables)
Ademas evita que se reproduzca un video de los canales de la lista si se entra por un enlace directo (p.e. que te pasa alguien). Evitando así subir las reproducciones del video.
______
## Update

### Usuarios de Firefox
Ahora puedes instalar automaticamente Antiretroviral(Si tienes Greasemonkey ya instalado)pulsando [aquí](https://raw.githubusercontent.com/AinaSG/Antiretroviral/master/Antiretroviral.user.js).

Luego puedes editar manualmente la lista de canales bloqueados entrando en el gestor de userscripts (dentro del gestor de complementos)

### Usuarios de Chrome
No uso chrome, por lo que no he testeado el funcionamiento del script en esa plataforma, de todas formas, si estas interesado en usarlo, prueba a ver que tal Tampermonkey. 
______
## How To

**1**- Asegurate de tener Greasemonkey [instalado en tu navegador](https://addons.mozilla.org/firefox/addon/greasemonkey/):

**2**- Crea un nuevo script

![Nuevo Script](http://i.imgur.com/q6HoSfP.png)

**3** - Rellena la ficha para el Script

![Ficha](http://i.imgur.com/GYaCIPL.png)

**4** - Borra lo que se encuentre en el script y pega el contenido de Antiretroviral.js

**5** - Puedes editar los bloqueos añadiendo los usuarios en la lista

[Ejemplo de lista](http://i.imgur.com/JbK8Wm3.png)

**6** - Guarda el script

**Nota** - Puede que necesites que el navegador recargue de 0 la pagina de youtube para que empiece a funcionar el script (ctrl+F5)
______
## Bugs conocidos

**1**- Con ciertas userskins de YouTube, al entrar en un video de canal bloqueado por enlace directo, el recuadro en el que se coloca el componente del reproductor no se borra. El comportamiento esperado es que ese cuadro desapareciera y solo saliese el texto informando del bloqueo. Eso es porque YouTube cambió algunas cosas de su diseño despues de que escribiera el script, y de momento no lo he editado para reflejar estos cambios.

Es posible que el bug tambien ocurra sin usar ninguna userskin, no lo he visto, pero eso no significa que no lo haga.

No es un bug grave, pero queda algo "Feo". Si alguien tienen ganas de arreglarlo, que se sienta libre de hacer un Pull Request. 
