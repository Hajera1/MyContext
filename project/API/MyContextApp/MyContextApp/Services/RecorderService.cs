﻿using MyContextApp.Data;
using MyContextApp.Data.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyContextApp.Interfaces;
using MyContextApp.Models;

namespace MyContextApp.Services
{
    public class RecoderService : IRecoderService
    {
        private ApplicationDbContext _context;
        public RecoderService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<RecoderDto>> GetAll()
        {
            List<RecoderDto> mdoelList = new List<RecoderDto>();
            var data = _context.RecoderParticipants.Where(c => c.Id > 0);
            foreach (var asset in data)
            {
                mdoelList.Add(new RecoderDto()
                {
                    Description = asset.Description,
                    ReferenceNo = asset.ReferenceNo,
                    Id = asset.Id,
                    ChainId = asset.ChainId,
                    UserId = asset.UserId
                });

            }
            return mdoelList;
        }

        public async Task<RecoderDto> GetById(int id)
        {
            var data = _context.RecoderParticipants.Find(id);
            RecoderDto model = new RecoderDto() {
                
            };
           
            return model;
        }

        public async Task<RecoderDto> Create(RecoderDto model)
        {
            // validation
            RecoderParticipant data = new RecoderParticipant()
            {
                Description = model.Description,
                ReferenceNo = model.ReferenceNo,
                Id = model.Id,
                ChainId = model.ChainId,
                UserId = model.UserId
            };

            _context.RecoderParticipants.Add(data);
            _context.SaveChanges();
            model.Id = data.Id;
            return model;
        }

        public async void Update(RecoderDto model)
        {
            var data = _context.RecoderParticipants.Find(model.Id);
            if (data != null)
            {
                data.Description = model.Description;
                data.ReferenceNo = model.ReferenceNo;
                data.Id = model.Id;
                data.ChainId = model.ChainId;
                data.UserId = model.UserId;
                _context.RecoderParticipants.Update(data);
                _context.SaveChanges();
            }

        }

        public async void Delete(int id)
        {
            var data = _context.RecoderParticipants.Find(id);
            if (data != null)
            {
                _context.RecoderParticipants.Remove(data);
                _context.SaveChanges();
            }
        }



    }

}