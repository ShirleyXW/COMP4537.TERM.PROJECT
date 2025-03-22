
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { generateApiKey } from "@/lib/api";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function APIGenerate ({userId}: {userId: number}) {

    const generateKey = () => {
        try {
            const result = generateApiKey(userId);
        }
        catch (error) {
            console.error("Failed to generate key");
        }
    };
    
    return (
        <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Create Key
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="hover:bg-transparent">
                        <TableCell>
                            <Input placeholder="Enter Key Name" />
                        </TableCell>
                        <TableCell>
                            <Button className="bg-gradient-to-br from-blue-500 to-blue-300 rounded w-20 h-8 hover:from-blue-900 hover:to-blue-400" onClick={()=>generateKey()}>Generate</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
                
    );
}