import axios from 'axios';
import Command from '../command';
import { MessageManager } from '../../manager/message_manager';

export default class TraCuuDiemThiCommand extends Command {
    public constructor() {
        super('tracuudiemthi', 'Tra cứu điểm thi');
    }

    public async execute(threadId: string, args: string[]) {
        if (args.length == 0) {
            MessageManager.sendMessage(threadId, 'Bạn cần điền sbd');
            return;
        }
        const data = await axios.get('https://api-university-2022.beecost.vn/university/lookup_examiner?id=' + args[0]);
        if (data.data['status'] === 'success') {
            const testData = data.data['data'];
            MessageManager.sendMessage(
                threadId,
                `
😲 Điểm thi THPT của thí sinh có số báo danh ${args[0]}
🏫 Thi tại ${testData['test_location']} năm ${testData['scores']['year']}
------------------------------------------------
➕ Toán: ${testData['scores']['mathematics_score']}
🍎 Vật lý: ${testData['scores']['physics_score'] == null ? 'không thi' : testData['scores']['physics_score']}
🧪 Hóa học: ${testData['scores']['chemistry_score'] == null ? 'không thi' : testData['scores']['chemistry_score']}
🇺🇸 Ngoại ngữ: ${testData['scores']['foreign_language_score']} | Tổ hợp ngoại ngữ ${testData['scores']['foreign_language_type']}
🧬 Sinh học: ${testData['scores']['biology_score'] == null ? 'không thi' : testData['scores']['biology_score']}
📖 Ngữ văn: ${testData['scores']['literature_score'] == null ? 'không thi' : testData['scores']['literature_score']}
🌎 Lịch sử ${testData['scores']['history_score'] == null ? 'không thi' : testData['scores']['history_score']}
🏔️ Địa lý ${testData['scores']['geography_score'] == null ? 'không thi' : testData['scores']['geography_score']}
🧑‍🏫 GDCD ${testData['scores']['civic_education_score'] == null ? 'không thi' : testData['scores']['civic_education_score']}
`
            );
        } else {
            MessageManager.sendMessage(threadId, 'Có lỗi trong khi tìm điểm, sai sbd à?');
        }
    }
}
