import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined'

function Note({note, deleteNote}) {
    return(
        <div className='note'>
            <div className='note__body'>{note.text}</div>
            <div className='note_footer'>
                <DeleteForeverOutlined
                    onClick = {()=>deleteNote(note.id)}
                    className = 'note__delete'
                    aria-hidden='true'
                ></DeleteForeverOutlined>
            </div>
        </div>
    )
}

export default Note;