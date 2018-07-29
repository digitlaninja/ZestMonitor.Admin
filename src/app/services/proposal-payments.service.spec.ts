/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProposalPaymentsService } from './proposal-payments.service';

describe('Service: DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProposalPaymentsService]
        });
    });

    it('should ...', inject(
        [ProposalPaymentsService],
        (service: ProposalPaymentsService) => {
            expect(service).toBeTruthy();
        }
    ));
});
