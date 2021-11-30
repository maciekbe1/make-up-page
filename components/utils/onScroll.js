const onScroll = (event, id) => {
  const anchor = (event.target.ownerDocument || document).querySelector(id);

  if (anchor) {
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
export default onScroll;
