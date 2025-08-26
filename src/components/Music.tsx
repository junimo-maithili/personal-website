const Music = () => {
  return (
    <div id="musicDiv">
        <iframe width="100%" height="300" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1991208359&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="musicEmbed">
            <a className="singerLink" href="https://soundcloud.com/lonealphamusic" title="Alohaii" target="_blank">Alohaii</a>
            <a className="singerLink" href="https://soundcloud.com/lonealphamusic/submerge-suisoh" title="Submerge (feat. 水槽) ⟡SUMMERTIDE BONUS⟡" target="_blank">Submerge (feat. 水槽) ⟡SUMMERTIDE BONUS⟡</a>
        </div>

    </div>
  )
}

export default Music
