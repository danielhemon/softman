import { Component } from '@angular/core';
import { RecordService } from '../../services/record.service';
import { Record } from '../../models/record.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  records: Record[] = [];
  currentPage = 1;
  pageSize = 5;
  showSearch = false;
  showFilter = false;

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.records = this.recordService.get();
  }

  get paginatedRecords(): Record[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.records.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage * this.pageSize < this.records.length) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }
}
