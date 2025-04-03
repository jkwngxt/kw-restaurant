export default function SmallFooter() {
    return (
        <div>
            {/* ส่วนนี้จะใช้สำหรับหน้าจอใหญ่ */}
            <div className="md:block hidden  bottom-4 left-0 right-0 text-center text-white/80 text-sm font-light">
                <p>123 Restaurant Street, Bangkok • Tel: 09-719-5226</p>
            </div>

            {/* ส่วนนี้จะใช้สำหรับหน้าจอเล็ก */}
            <div className="md:hidden bottom-4 left-0 right-0 text-center text-white/80 text-sm font-light">
                <p>123 Restaurant Street, Bangkok</p>
                <p>Tel: 09-719-5226</p>
            </div>
        </div>
    )
}
