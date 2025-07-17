export default function Footer() {
  return (
    <footer className="glass-strong border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-text-primary">&copy; {new Date().getFullYear()} TOBEXC - University of Toronto Book Exchange</p>
          <p className="text-sm mt-2 text-text-secondary">
            A marketplace for UofT students to buy and sell textbooks
          </p>
        </div>
      </div>
    </footer>
  );
}