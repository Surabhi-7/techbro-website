

const FireCursor = () => {
  useEffect(() => {
    const particles = [];
    const count = 25;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "fire-particle";
      document.body.appendChild(el);

      particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        el,
      });
    }

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", move);

    const animate = () => {
      let x = mouse.x;
      let y = mouse.y;

      particles.forEach((p, i) => {
        p.x += (x - p.x) * 0.25;
        p.y += (y - p.y) * 0.25;

        p.el.style.left = p.x + "px";
        p.el.style.top = p.y + "px";
        p.el.style.opacity = 1 - i / count;
        p.el.style.transform = `translate(-50%, -50%) scale(${1 - i / count})`;

        x = p.x;
        y = p.y;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      particles.forEach(p => p.el.remove());
    };
  }, []);

  return null;
};

export default FireCursor;
