import React from 'react';

interface DeleteFeedProps {
  closeModal: () => void;
  selectedFeedId: number;
}

function DeleteFeed({ closeModal, selectedFeedId }: DeleteFeedProps) {
  const onClickDeleteSurvey = async () => {
    // await formApi.deleteForm(selectedFeedId);
    closeModal();
  };

  const onClickCancelDelete = () => closeModal();

  return (
    <div className="flex flex-col align-middle justify-center absolute top-1/3 left-1/3 w-1/3 xs:w-2/3 xs:left-[16.66%] rounded-xl p-9 z-20 bg-white">
      <div className="mb-4 text-lg text-bold">트윗을 삭제할까요?</div>
      <input type="password" placeholder="비밀번호" className="border rounded-md border-gray-200 mr-3 px-2 py-1 mb-3" />
      <div className="flex flex-col">
        <button
          type="button"
          onClick={onClickDeleteSurvey}
          className="rounded-2xl border border-gray-300 py-2 bg-red-500 text-white mb-3"
        >
          삭제
        </button>
        <button type="button" onClick={onClickCancelDelete} className="rounded-2xl border border-gray-300 py-2">
          취소
        </button>
      </div>
    </div>
  );
}

export default DeleteFeed;
