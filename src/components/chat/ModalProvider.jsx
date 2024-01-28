export default function ModalProvider({ children }) {
  return (
    <div className="fixed inset-0 top-[62px] bg-transparent  flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
    </div>
  );
}
