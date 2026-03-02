import axios from 'axios';

const confirmDelete = (id) => {
  axios.delete(`http://localhost:3000/remove-post/${id}`).catch((err) => {
    console.log(err);
  })
}

const DeleteConfirmation = ({ setToggleDelete, id }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl border border-rose-100 max-w-sm w-full p-7 flex flex-col items-center animate-pop-in">

        <h2 className="text-xl font-bold text-stone-800 mb-2 text-center">
          Are you sure you want to delete this post?
        </h2>
        <p className="text-stone-500 text-center mb-6">
          This action cannot be undone.
        </p>

        <div className="flex gap-4 w-full justify-center">
          {/* Delete Button (Post Deletion) */}
          <button
            className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg shadow cursor-pointer transition-all duration-150 active:scale-95"
            onClick={() => {
              confirmDelete(id)
            }}
            autoFocus
          >
            Yes, Delete
          </button>

          {/* Cancel Button (Closing Modal) */}
          <button
            className="px-5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 font-semibold rounded-lg shadow cursor-pointer transition-all duration-150 active:scale-95"
            onClick={() => {
              setToggleDelete(false)
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation