import Comment from './Comment';

function Comments() {
  return (
    <section className="comments">
      <h3>Comments</h3>
      <Comment
        username="soundseeker92"
        text="This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?"
      />
      <Comment
        username="Ted Baker"
        text="I've been following the label for years—so glad someone's finally writing about their impact."
      />
      <Comment
        username="Queen_of_noise"
        text="I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling."
      />
    </section>
  );
}

export default Comments;