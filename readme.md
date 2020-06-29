Features worked on:  

- Web-hostile(hardened) browser compatibility
    - Since some (my) browsers block third-party resources and a few DOM object types including webfont, canvas, iframe, and others by default for improved security and privacy, I built the webpage to function without relying on those.
- Similarly, the core part of the webpage works without JavaScript. HTML and pure CSS wer used as alternatives. The core features include:  
    - Glitchy text
    - Responsive Carousel Slider.
    - Changing slide images, contents, and links based on user interaction. 
    - Moving images
    - Fallback message "The image is not ready yet." when images are blocked or has not been loaded yet
    - Cache control
    - Single click to select contact information & copy all text formatting (try Ctrl + A  and Ctrl + C)
- But there are also JavaScript features. These include:
    - Replacing the content of HTML document to display JavaScript version of the webpage.
    - Displaying mouse coordination.
    - Pop-up message interactions with users (as an alternative to customizing feature).
    - Changing window(tab) title based on focus.
    - Mini inspect-element feature.

Final comment(s):
    - I guess I'm more of a back-end developer