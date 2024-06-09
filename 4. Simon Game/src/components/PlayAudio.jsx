import React, { useEffect, useRef, useState } from 'react';

const PlayAudio = ({ src }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => console.log(error));
        }
    });

    return <audio ref={audioRef} src={src} />;
};

export default PlayAudio;
