import React from 'react';
import NoteInput from './NoteInput';

function NoteBody({ onAddNoteHandler }) {
	return (
		<div className="note-app__body">
			<NoteInput addNote={onAddNoteHandler} />
		</div>
	);
}

export default NoteBody;
